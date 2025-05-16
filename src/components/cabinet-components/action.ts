import {QuizeCategory} from "@/types/quizeCategory.type";
import {ActionResult, handleAction} from "@/api/lib/handleAction";
import {tests} from '@/api'


export async function getCategoriesAction(): Promise<ActionResult<{ categories: QuizeCategory[] }>> {
    return handleAction(async () => {
        const categories = await tests.getAllCategories() as QuizeCategory[];
        return {categories}
    })
}