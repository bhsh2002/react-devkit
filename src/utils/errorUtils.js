const errorMap = {
    // Network & Generic Errors
    "Network Error": "مشكلة في الشبكة، يرجى التحقق من اتصالك بالإنترنت.",
    "Request failed with status code 500": "حدث خطأ في الخادم، يرجى المحاولة مرة أخرى لاحقاً.",
    "Request failed with status code 401": "غير مصرح لك بالقيام بهذه العملية.",
    "Request failed with status code 403": "ليس لديك الصلاحية للوصول إلى هذا المورد.",
    "Request failed with status code 404": "المورد المطلوب غير موجود.",
    "Request failed with status code 400": "طلب غير صالح، يرجى التحقق من البيانات المدخلة.",
    "Request failed with status code 422": "خطأ في التحقق من البيانات المدخلة.",
    "Request failed with status code 409": "تعارض في البيانات، يرجى التحقق والمحاولة مرة أخرى.",
    "Request failed with status code 429": "عدد كبير جداً من الطلبات. يرجى المحاولة لاحقاً.",
    "Timeout exceeded": "انتهت مهلة الاتصال بالخادم، يرجى المحاولة مرة أخرى.",
};

export const getTranslatedError = (error) => {
    if (!error) return "حدث خطأ غير متوقع.";
    const errorData = error.response?.data;

    if (errorData && errorData.errors) {
        const validationErrors = [];
        for (const location in errorData.errors) {
            for (const field in errorData.errors[location]) {
                const messages = errorData.errors[location][field];
                validationErrors.push(`${field}: ${messages.join(', ')}`);
            }
        }
        if (validationErrors.length > 0) {
            return validationErrors.join(' | ');
        }
    }
    
    const apiMessage = errorData?.error_code === "BUSINESS_LOGIC_ERROR" && errorData?.message;
    if (apiMessage) {
        return apiMessage;
    }

    const genericMessage = error.message;
    if (genericMessage && errorMap[genericMessage]) {
        return errorMap[genericMessage];
    }

    return "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.";
};
