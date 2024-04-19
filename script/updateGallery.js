const fs = require('fs').promises;



async function getImagesFiles(dirName){
    const allFiles = await fs.readdir(dirName);
    let filteredFiles = [];
    for (file of allFiles){
        const fileStat = await fs.stat(dirName+file);
        if (fileStat.isFile()) {
            for (actype of acceptedImageTypes){
                if (file.endsWith(actype)){
                    filteredFiles.push(dirName + file);
                    break;
                }
            }
        }
    }
    return filteredFiles;
}

function createJsonObj(title, filenames){
    let object = {
        "eventName": `${title}`,
        "images": [
        ]
    }
    filenames.forEach(element => {
       object.images.push({
            "url": element,
            "caption": element
        });
    });
    return object;
}

async function getObject(dirName){
    const files = await getImagesFiles(dirName);
    const obj = createJsonObj("30Jan fest", files);
    return obj; 
}

async function final(dirName, filename){
    const file = await fs.readFile(filename, 'utf8');
    console.log(file);
    let obj = JSON.parse(file);
    let newObj = await getObject(dirName);
    obj.push(newObj);
    json = JSON.stringify(obj);
    console.log(json);
    await fs.writeFile(filename, json, 'utf8');
}

const pathToStatic = '../static/'
const dirName = pathToStatic + 'images/gallery/FluteWorkshop2014/';
const filename = '../static/data/gallery.json';
const acceptedImageTypes = ['png', 'jpeg', 'jpg', 'gif', 'svg', 'webp', 'avi'];
final(dirName, filename).then();
