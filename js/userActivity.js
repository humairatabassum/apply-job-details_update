"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
var ViewType;
(function (ViewType) {
    ViewType["JobDetails"] = "Job Details";
    ViewType["JobSummary"] = "Job Summary";
})(ViewType || (ViewType = {}));
// add activity to collection
var testData1 = {
    ActivityDate: new Date(),
    Count: 10,
    ID: 212121,
    Type: ViewType.JobDetails,
    UserId: 2121,
};
// add activity to collection
function addUserActivityToCollection(userActivity) {
    let storedData = localStorage.getItem("userActivityCollection");
    console.log("local storage data", storedData);
    let userActivities;
    if (storedData !== null) {
        userActivities = JSON.parse(storedData);
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
    // need to check if type and id is same or not
    // if same then count will be increase
    let matchFound = false;
    if (userActivities.UserActivityCollection.length > 0) {
        userActivities.UserActivityCollection.map((activity) => {
            if (activity.ID === userActivity.ID &&
                activity.Type === userActivity.Type) {
                console.log(`User Id: ${activity.UserId}, User Type: ${activity.Type}, Prev Count: ${activity.Count}`);
                activity.Count += 1;
                matchFound = true;
                console.log(`User Id: ${activity.UserId}, User Type: ${activity.Type},Next Count: ${activity.Count}`);
                return;
            }
        });
    }
    if (!matchFound) {
        console.log("adding activity ");
        userActivities.UserActivityCollection.push(userActivity);
    }
    localStorage.setItem("userActivityCollection", JSON.stringify(userActivities));
}
function getDeviceName() {
    let deviceName = "Unknown";
    if (navigator.userAgent.match(/Android/i)) {
        deviceName = "Android Device";
    }
    else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        deviceName = "iOS Device";
    }
    else if (navigator.userAgent.match(/Windows Phone/i)) {
        deviceName = "Windows Phone Device";
    }
    else if (navigator.userAgent.match(/Windows NT/i) && navigator.userAgent.match(/Touch/i)) {
        deviceName = "Windows Touchscreen Device";
    }
    else if (navigator.userAgent.match(/Macintosh/i) && navigator.userAgent.match(/Intel/i)) {
        deviceName = "Macintosh Device";
    }
    else if (navigator.userAgent.match(/Linux/i) && navigator.userAgent.match(/Android/i) === null) {
        deviceName = "Linux Desktop";
    }
    else if (navigator.userAgent.match(/CrOS/i)) {
        deviceName = "Chrome OS Device";
    }
    else if (navigator.userAgent.match(/BlackBerry/i)) {
        deviceName = "BlackBerry Device";
    }
    return deviceName;
}
function getOperatingSystem() {
    let osName = "Unknown";
    if (navigator.userAgent.match(/Android/i)) {
        osName = "Android";
    }
    else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        osName = "iOS";
    }
    else if (navigator.userAgent.match(/Windows Phone/i)) {
        osName = "Windows Phone";
    }
    else if (navigator.userAgent.match(/Windows NT/i)) {
        osName = "Windows";
    }
    else if (navigator.userAgent.match(/Macintosh/i)) {
        osName = "Macintosh";
    }
    else if (navigator.userAgent.match(/Linux/i)) {
        osName = "Linux";
    }
    return osName;
}
function getIPAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.ipify.org?format=json');
            const data = yield response.json();
            return data.ip;
        }
        catch (error) {
            console.error("Error fetching IP address:", error);
            return "Unknown";
        }
    });
}
(_a = document.getElementById("activity1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    addUserActivityToCollection(testData1);
});
