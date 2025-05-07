"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {
    IconCode,
    IconBrandReact,
    IconBrandNodejs,
    IconDatabase,
    IconBrandTypescript,
    IconColorSwatch,
    IconUser,
} from "@tabler/icons-react";
import {cn} from "@/lib/utils";

interface Test {
    id: number;
    title: string;
    description: string;
    category: string;
    createdAt: string;
}

const mockTests: Test[] = [
    {
        id: 1,
        title: "МОТОРНОЕ СУДНО ГИДРОЦИКЛ (ГИМС)",
        description: "Проверьте свои знания",
        category: "safety",
        createdAt: "2024-05-01",
    },
    {
        id: 2,
        title: "МИНТРАНС",
        description: "Проверьте свои знания",
        category: "navigation",
        createdAt: "2024-05-02",
    },
    {
        id: 3,
        title: "ПАРУСНЫЕ СУДА (ГИМС)",
        description: "Проверьте свои знания",
        category: "legislation",
        createdAt: "2024-05-03",
    },
    {
        id: 4,
        title: "СУДА ОСОБОЙ КОНСТРУКЦИИ",
        description: "Проверьте свои знания",
        category: "ship",
        createdAt: "2024-05-03",
    },
    {
        id: 5,
        title: "СПАСАТЕЛЬ ВОСВОД",
        description: "Проверьте свои знания",
        category: "rescuer",
        createdAt: "2024-05-03",
    },
];

const iconsMap: Record<string, React.ReactNode> = {
    technical: <IconCode className="h-5 w-5 text-[#009FE2]"/>,
    safety: <IconBrandReact className="h-5 w-5 text-[#009FE2]"/>,
    navigation: <IconBrandTypescript className="h-5 w-5 text-[#009FE2]"/>,
    legislation: <IconColorSwatch className="h-5 w-5 text-[#009FE2]"/>,
    equipment: <IconBrandNodejs className="h-5 w-5 text-[#009FE2]"/>,
    rescue: <IconDatabase className="h-5 w-5 text-[#009FE2]"/>,
    default: <IconUser className="h-5 w-5 text-[#009FE2]"/>,
};

export function LampDemo() {
    const router = useRouter();
    const [tests, setTests] = useState<Test[]>(mockTests);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isAuthorized, setAuthorized] = useState(true);

    // useEffect(() => {
    //   async function checkAuthHandle() {
    //     const status = localStorage.getItem(`test-auth-${testId}`);
    //     if (status === "granted") {
    //       // TODO: провекрка токена с бека
    //       console.log("Доступ к тесту подтвержден", testId);
    //     } else {
    //       // TODO: редирект на 403 страницу или алерт
    //       console.warn("Нет доступа к тесту", testId);
    //     }
    //   }
    //
    //   checkAuthHandle();
    // }, [testId]);


    const handleCardClick = () => {
        router.push(`/sign-in`);
    };

    const getIcon = (category: string) => {
        return iconsMap[category] || iconsMap.default;
    };

    return (
        <div className="relative min-h-screen w-full bg-[#04314D] overflow-hidden">
            <div className="flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0 pt-16">
                {/* Анимации и градиенты */}
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
                        {tests.map((test, i) => (
                            <motion.div
                                key={test.id}
                                onClick={() => handleCardClick()}
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
                                    <div className="p-2 rounded-lg bg-[#009FE2]/10">
                                        {getIcon(test.category)}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#B6E8FF]">
                                        {test.title}
                                    </h3>
                                </div>
                                <p className="text-[#75D8FF] flex-grow">{test.description}</p>
                                <div className="mt-4 text-sm text-[#B6E8FF]/80">
                                    Создано: {new Date(test.createdAt).toLocaleDateString()}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}