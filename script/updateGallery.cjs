const fs = require('fs').promises;
// import {promises as fs} from 'fs';

async function getImagesFiles(dirName) {
  const allFiles = await fs.readdir(dirName);
  console.log(allFiles);
  let filteredFiles = [];
  for (file of allFiles) {
    const fileStat = await fs.stat(dirName + file);
    if (fileStat.isFile()) {
      for (actype of acceptedImageTypes) {
        if (file.endsWith(actype)) {
          filteredFiles.push(relativeName + file);
          break;
        }
      }
    }
  }
  return filteredFiles.sort();
}

function createJsonObj(title, filenames) {
  let object = {
    eventName: `${title}`,
    images: [],
  };
  filenames.forEach((element) => {
    object.images.push({
      url: element,
      caption: element,
    });
  });
  return object;
}

async function getObject(dirName, title) {
  const files = await getImagesFiles(dirName);
  const obj = createJsonObj(title, files);
  return obj;
}

async function final(title, dirName, filename) {
  const file = await fs.readFile(filename, "utf8");
  let obj = JSON.parse(file);
  let newObj = await getObject(dirName, title);
  obj.push(newObj);
  json = JSON.stringify(obj);
  console.log(json);
  await fs.writeFile(filename, json, "utf8");
}

const pathToStatic = "../static/";
const relativeName = "images/gallery/hf17/";
const title = "Harmonica Festival 2017";
const dirName = pathToStatic + relativeName;
const filename = "../src/lib/data/gallery_new.json";
const acceptedImageTypes = ['png', 'jpeg', 'jpg', 'gif', 'svg', 'webp', 'avi'];
final(title, dirName, filename).then();
