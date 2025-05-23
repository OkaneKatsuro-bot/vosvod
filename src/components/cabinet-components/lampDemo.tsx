"use client";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {getCategoriesAction} from "@/components/cabinet-components/action";
import {isSuccess} from "@/api/lib/isSuccessGuard";
import {QuizeCategory} from "@/types/quizeCategory.type";
import {ProtectedLayout} from "@/components/sign-in-components/ProtectedLayout";

export function LampDemo() {
    const router = useRouter();
    const [categories, setCategories] = useState<QuizeCategory[]>([]);
    const [loading] = useState(false);
    const [error] = useState<string | null>(null);
    const [actCategory, setActCategory] = useState<QuizeCategory>();
    const [isAuth, setAuth] = useState<boolean>(false);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategoriesAction();
                if (isSuccess(res)) {
                    setCategories(res.categories);
                } else {
                    throw new Error(res.message);
                }
            } catch (err) {
                console.error('Не удалось загрузить категории:', err);
            }
        };
        fetchCategories();
    }, []);

    const handleCardClick = (title: string) => {
        const selected = categories.find(c => c.name === title);
        if (selected) {
            setActCategory(selected);
        }
        //
    };


    if (!isAuth && actCategory) {
        return <ProtectedLayout {...actCategory} />;
    }

    return (
        <div className="relative min-h-screen w-full bg-[#04314D] overflow-hidden">
            <div className="flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0 pt-16">
                <motion.div
                    initial={{opacity: 0.5, width: "15rem"}}
                    whileInView={{opacity: 1, width: "30rem"}}
                    transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#009FE2] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div
                        className="absolute w-[100%] left-0 bg-[#04314D] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"/>
                    <div
                        className="absolute w-40 h-[100%] left-0 bg-[#04314D] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"/>
                </motion.div>

                <motion.div
                    initial={{opacity: 0.5, width: "15rem"}}
                    whileInView={{opacity: 1, width: "30rem"}}
                    transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#009FE2] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div
                        className="absolute w-40 h-[100%] right-0 bg-[#04314D] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"/>
                    <div
                        className="absolute w-[100%] right-0 bg-[#04314D] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"/>
                </motion.div>

                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#04314D] blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div
                    className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#75D8FF] opacity-80 blur-3xl"></div>

                <motion.div
                    initial={{width: "8rem"}}
                    whileInView={{width: "16rem"}}
                    transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#B6E8FF] blur-2xl"
                ></motion.div>

                <motion.div
                    initial={{width: "15rem"}}
                    whileInView={{width: "30rem"}}
                    transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#009FE2] brightness-150"
                ></motion.div>
            </div>

            <div className="relative z-50 flex flex-col items-center px-5 -translate-y-10">
                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.8, ease: "easeInOut"}}
                    className="lg mt-32 bg-gradient-to-br from-[#B6E8FF] to-[#009FE2] py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Личный кабинет
                </motion.h1>
            </div>

            <div className="relative z-40 px-4 pb-12 mt-4">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div
                            className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#009FE2]"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-8">
                        <p className="text-[#FF6B6B] text-lg">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-6 py-2 bg-[#009FE2] rounded-lg hover:bg-[#007BB3] transition-colors"
                        >
                            Обновить
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {categories.map((test, i) => (
                            <motion.div
                                key={test.id}
                                onClick={() => handleCardClick(test.name)}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: i * 0.1}}
                                className={cn(
                                    "bg-[#064E74]/80 rounded-xl p-6 border border-[#75D8FF]/20 shadow-lg",
                                    "flex flex-col h-full min-h-[200px] backdrop-blur-sm hover:border-[#B6E8FF]/40 transition-colors",
                                    "cursor-pointer hover:border-[#009FE2]"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-4">

                                    <h3 className="text-xl font-semibold text-[#B6E8FF]">
                                        {test.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}