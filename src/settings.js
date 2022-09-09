import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react"

const appId ="ed1d606be7ca4a5cb76e8419f4bb0bc4"
const token ="007eJxTYLh0IfLIQ7Y/XaJHPRyvsYjeObituiXoY89y49qtt7WLdlorMKSmGKaYGZglpZonJ5okmiYnmZulWpgYWqaZJCUZJCWbxB+VSr4nJpPcl7uZkZEBAkF8Xobi0oLUouKSxCLdxIICBgYAWfAmcA=="

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "superstar-app";