import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react"

const appId ="ed1d606be7ca4a5cb76e8419f4bb0bc4"
const token ="007eJxTYGCdyrhNRDjJ5kJlSrzTgb9MFwSTWo1WWMVrlTEfucI+96kCQ2qKYYqZgVlSqnlyokmiaXKSuVmqhYmhZZpJUpJBUrKJdpdI8urbosl7t7KyMjJAIIjPy1BcWpBaVFySWKSbWFDAwAAA2j4i6Q=="

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "superstar-app";