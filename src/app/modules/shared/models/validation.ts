export interface ValidationMessageContent {
  [key: string]: string;
}

export interface ValidationMessageResponse {
  message: string;
  success: boolean;
}
