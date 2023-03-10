const { Builder,By, Key, util,assert } = require('selenium-webdriver');

const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");


const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
//const driver = new Builder().forBrowser("firefox").build();

async function test() {
    await driver.get("http://localhost:4200/pictures");
    let found_title = await driver.findElement(By.xpath("/html/body/app-root/app-pictures/body/div/a/h1")).isDisplayed();

    if(found_title === true){
        console.log("Opened MainPage successfully")
    }

    startimage = await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[1]/img'));

    await startimage.click();

    let right_arrow = await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[23]/div/img[2]'));

    let missing_left_arrow = await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[23]/div/img[1]')).then(null, function (err) {

        missing_left_arrow.click();
        if (err.name === "StaleElementReferenceError") {
            console.log("Left Arrow not clickable on first Picture, as intended");
        }
    });

    for (let i = 1; i < 23 ; i++) {
        await right_arrow.click();
        //await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[23]/div/img[xxxx]')).sendKeys(Key.ARROW_RIGHT);
    }
    if(right_arrow === undefined){
        await console.log("right arrow missing");
    }

    let left_arrow = await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[23]/div/img[1]'));
    for (let i = 1; i < 23 ; i++) {
        await left_arrow.click();
    }
    //close big picture
    await driver.findElement(By.xpath('/html/body/app-root/app-pictures/body/div/div[1]/div[23]/div/img[3]')).click();


    await driver.findElement(By.xpath('/html/body/app-root/body/div[3]/div[4]/a')).click();

    found_title = await driver.findElement(By.xpath("/html/body/app-root/app-protection/html/body/div/div/h2[1]")).isDisplayed();

    if(found_title === true){
        console.log("Opened Data_Protection successfully")
    }

    await driver.findElement(By.xpath('/html/body/app-root/body/div[3]/div[3]/a')).click();

    found_title = await driver.findElement(By.xpath("/html/body/app-root/app-impressum/html/body/div/div/h2[1]")).isDisplayed();

    if(found_title === true){
        console.log("Opened Impressum successfully")
    }

    await nightTest();


}
async function nightTest() {
    driver.findElement(By.xpath('/html/body/app-root/body/div[3]/div[2]/a')).click();

    while(true){

            let animationdone = await driver.findElement(By.className("animationDone")).then(null, function (err){
                if (err.name==="NoSuchElementError") {

                }
            });

            if(animationdone !== undefined ) {
                 console.log("Animation Done!")
                 break;
            }
    }
    console.log("All tests successfull");

}

test();
