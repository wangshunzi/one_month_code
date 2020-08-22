import ajax from "./ajax";

export const getCourseInfo = ()=> ajax.get("statistics/category_course_count")