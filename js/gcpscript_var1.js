"use strict";
// generate Url
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const generateUrl = () => __awaiter(void 0, void 0, void 0, function* () {
    let requestFileName = `AnalyticsData-${generateGUID()}`;
    try {
        const response = yield fetch(`https://testmongo.bdjobs.com/analyticsengine/api/CloudStorage?fileName=${requestFileName}`);
        if (response.redirected) {
            const redirectedResponse = yield fetch(response.url);
            const content = yield redirectedResponse.text();
            console.log("Content:", content);
            return content;
        }
        else {
            const content = yield response.text();
            console.log("Content:", content);
            return content;
        }
    }
    catch (error) {
        console.error("Error:", error);
        throw error;
    }
});
// get data from local storage
const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("userActivityCollection");
    console.log("Stored data:", storedData);
    let userActivities;
    if (storedData !== null) {
        try {
            userActivities = JSON.parse(storedData);
        }
        catch (error) {
            console.error("Error parsing JSON:", error);
            return {
                UserActivityCollection: [],
                IP: "",
                DeviceName: "",
                OS: "",
                OSVersion: "",
                MacAddress: "",
                Ram: "",
                InternetSpeed: "",
            };
        }
    }
    else {
        userActivities = {
            UserActivityCollection: [],
            IP: "",
            DeviceName: "",
            OS: "",
            OSVersion: "",
            MacAddress: "",
            Ram: "",
            InternetSpeed: "",
        };
    }
    return userActivities;
};
const generateJsonToBlob = (activityData) => {
    const activityJSON = JSON.stringify(activityData);
    const blob = new Blob([activityJSON], { type: "application/json" });
    return blob;
};
const sentAnalyticsJsonToGCP = (signedUrl, activityFile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (localStorage.getItem('userActivityCollection')) {
            const response = yield fetch(signedUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: activityFile,
            });
            console.log("response after file upload...", response);
            localStorage.removeItem('userActivityCollection');
        }
        
    }
    catch (err) {
        console.log("error after file upload....", err);
    }
});
const generateUrlAndSentFileToGCP = () => __awaiter(void 0, void 0, void 0, function* () {
    // get auth url
    const generatedUrl = yield generateUrl();
    // get data from local storage
    const localStorageData = getDataFromLocalStorage();
    // generate local file
    const fileData = generateJsonToBlob(localStorageData);
    // sent file to GCP
    sentAnalyticsJsonToGCP(generatedUrl, fileData);
});
// 5 minutes time interval method call
// const TIME_INTERVAL = 10 * 60 * 1000;
const TIME_INTERVAL = 5 * 60 * 1000;
setInterval(() => {
    generateUrlAndSentFileToGCP();
    //console.log(guid);
}, TIME_INTERVAL);
