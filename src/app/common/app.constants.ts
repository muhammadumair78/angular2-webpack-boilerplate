export const AppUrls = {
    asd: 123
};

export const Promotions = [
    'asd'
];

export const RegexPattern = {
    url: "(http|ftp|https)://[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)+([a-zA-Z0-9\-\.,@\?^=%&;:/~\+#]*[a-zA-Z0-9\-@\?^=%&;/~\+#])?",
    email: "([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+",
    name: "[a-zA-Z0-9/, .'-]+$",
    number: "^[0-9]*$",
    description: "",
    password: "^(?=^.{8,32}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$"
};


export const NotificationMessages = {
    deletePromotion: {
        success : {msg: 'Promotion deleted successfully!', title: 'Success!'},
        error: {msg: 'Error in deleting promotion!', title: 'Alert!'}
    },
    updatePromotionStatus: {
        success : {msg: 'Promotion status updated successfully!', title: 'Success!'},
        error: {msg: 'Error in updating promotion status!', title: 'Alert!'}
    },
    savePromotion: {
        success : {msg: 'Promotion saved successfully!', title: 'Success!'},
        error: {msg: 'Error in saving promotion!', title: 'Alert!'}
    }
};