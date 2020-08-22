import ajax from "./ajax";

export const getUserInfo = () => ajax.get("overview/ov_user")

export const getScoreInfo = (score) => ajax.get("overview/ov_comment", {score})