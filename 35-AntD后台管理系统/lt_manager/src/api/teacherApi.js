
import ajax from "./ajax";

export const teacherList = () => ajax.get("teacher/teacher_list")