import {fetcher} from "@/api/lib/fetcher";

export async function getAllCategories() {
    return await fetcher('/api/tests/allCategories')
}