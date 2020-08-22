import ajax from "./ajax";

export const getCategoryList = () => ajax.get("category/category_list")

export const deleteCategory = (id) => ajax.get("category/delete_category", {id})

export const addCategory = (name) => ajax.post("category/new_category", {name})

export const updateCategory = (id, name) => ajax.post("category/update_category", {id, name})