const { avplay } = window.webapis;

export const {
    open,
    close,
    prepare,
    prepareAsync,
    setDisplayRect,
    play,
    seekTo,
    stop,
    getState,
    pause,
    jumpForward,
    jumpBackward,
    getDuration,
    getCurrentTime,
    setTimeoutForBuffering,
    setBufferingParam,
    setSpeed,
    setListener,
    setDrm,
    getUID,
    setSoundAnalysisListener,
    unsetSoundAnalysisListener,
    setSilentSubtitle,
    setExternalSubtitlePath,
    setSubtitlePosition,
    setDisplayMethod,
    setSelectTrack,
    getCurrentStreamInfo,
    getTotalTrackInfo,
    setStreamingProperty,
    getStreamingProperty,
    getVersion,
    suspend,
    restore,
    restoreAsync
} = avplay;

export enum AVPlayPlayerState {
    NONE = 'NONE',
    IDLE = 'IDLE',
    READY = 'READY',
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED'
}
export enum AVPlayDisplayMode {
    PLAYER_DISPLAY_MODE_LETTER_BOX = 'PLAYER_DISPLAY_MODE_LETTER_BOX',
    PLAYER_DISPLAY_MODE_FULL_SCREEN = 'PLAYER_DISPLAY_MODE_FULL_SCREEN',
    PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO = 'PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO'
}
export enum AVPlayBufferOption {
    PLAYER_BUFFER_FOR_PLAY = 'PLAYER_BUFFER_FOR_PLAY',
    PLAYER_BUFFER_FOR_RESUME = 'PLAYER_BUFFER_FOR_RESUME'
}
export enum AVPlayBufferSizeUnit {
    PLAYER_BUFFER_SIZE_IN_BYTE = 'PLAYER_BUFFER_SIZE_IN_BYTE',
    PLAYER_BUFFER_SIZE_IN_SECOND = 'PLAYER_BUFFER_SIZE_IN_SECOND'
}
export enum AVPlayStreamingPropertyType {
    COOKIE = 'COOKIE',
    USER_AGENT = 'USER_AGENT',
    PREBUFFER_MODE = 'PREBUFFER_MODE',
    ADAPTIVE_INFO = 'ADAPTIVE_INFO',
    SET_MODE_4K = 'SET_MODE_4K',
    PROPERTY_HD_AUDIO = 'PROPERTY_HD_AUDIO',
    LISTEN_SPARSE_TRACK = 'LISTEN_SPARSE_TRACK',
    IS_LIVE = 'IS_LIVE',
    AVAILABLE_BITRATE = 'AVAILABLE_BITRATE',
    GET_LIVE_DURATION = 'GET_LIVE_DURATION',
    CURRENT_BANDWIDTH = 'CURRENT_BANDWIDTH',
    WIDEVINE = 'WIDEVINE',
    SET_VR360_MODE = 'SET_VR360_MODE',
    USE_VIDEOMIXER = 'USE_VIDEOMIXER',
    SET_MIXEDFRAME = 'SET_MIXEDFRAME',
    PORTRAIT_MODE = 'PORTRAIT_MODE'
}
export enum AVPlayDrmType {
    PLAYREADY = 'PLAYREADY',
    EME_PLAYREADY = 'EME_PLAYREADY',
    VERIMATRIX = 'VERIMATRIX',
    WIDEVINE_CDM = 'WIDEVINE_CDM',
    EME_WIDEVINE_CDM = 'EME_WIDEVINE_CDM'
}
export enum AVPlayDrmOperation {
    'SetProperties' = 'SetProperties',
    'InstallLicense' = 'InstallLicense',
    'ProcessInitiator' = 'ProcessInitiator',
    'GetUID' = 'GetUID',
    'Initialize' = 'Initialize',
    'Finalize' = 'Finalize',
    'widevine_license_data' = 'widevine_license_data',
    'widevine_app_session' = 'widevine_app_session',
    'widevine_data_type' = 'widevine_data_type'
}
export enum AVPlayStreamType {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    TEXT = 'TEXT'
}
export enum AVPlayError {
    PLAYER_ERROR_NONE = 'PLAYER_ERROR_NONE',
    PLAYER_ERROR_INVALID_PARAMETER = 'PLAYER_ERROR_INVALID_PARAMETER',
    PLAYER_ERROR_NO_SUCH_FILE = 'PLAYER_ERROR_NO_SUCH_FILE',
    PLAYER_ERROR_INVALID_OPERATION = 'PLAYER_ERROR_INVALID_OPERATION',
    PLAYER_ERROR_SEEK_FAILED = 'PLAYER_ERROR_SEEK_FAILED',
    PLAYER_ERROR_INVALID_STATE = 'PLAYER_ERROR_INVALID_STATE',
    PLAYER_ERROR_NOT_SUPPORTED_FILE = 'PLAYER_ERROR_NOT_SUPPORTED_FILE',
    PLAYER_ERROR_NOT_SUPPORTED_FORMAT = 'PLAYER_ERROR_NOT_SUPPORTED_FORMAT',
    PLAYER_ERROR_INVALID_URI = 'PLAYER_ERROR_INVALID_URI',
    PLAYER_ERROR_CONNECTION_FAILED = 'PLAYER_ERROR_CONNECTION_FAILED',
    PLAYER_ERROR_GENEREIC = 'PLAYER_ERROR_GENEREIC'
}
export enum AVPlayEvent {
    PLAYER_MSG_NONE = 'PLAYER_MSG_NONE',
    PLAYER_MSG_RESOLUTION_CHANGED = 'PLAYER_MSG_RESOLUTION_CHANGED',
    PLAYER_MSG_BITRATE_CHANGE = 'PLAYER_MSG_BITRATE_CHANGE',
    PLAYER_MSG_FRAGMENT_INFO = 'PLAYER_MSG_FRAGMENT_INFO',
    PLAYER_SPARSE_TRACK_DETECT = 'PLAYER_SPARSE_TRACK_DETECT',
    PLAYER_STREAMING_EVENT = 'PLAYER_STREAMING_EVENT',
    PLAYER_MSG_HTTP_ERROR_CODE = 'PLAYER_MSG_HTTP_ERROR_CODE',
    PLAYER_MSG_DRM_CHALLENGE_DATA = 'PLAYER_MSG_DRM_CHALLENGE_DATA'
}
