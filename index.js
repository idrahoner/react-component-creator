const fs = require("fs/promises");
const path = require("path");

const COMPONENTS_TYPE = Object.freeze({
  components: "components",
  pages: "pages",
});

const capitalizeName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const normalizeNames = (namesList) => {
  const normalized = namesList.map((name) => {
    const trimmedName = name.trim();
    const words = trimmedName.split("-");
    return words.map(capitalizeName).join("");
  });
  return normalized;
};

const createFiles = async (folderName, fileName) => {
  await fs.writeFile(
    path.join(folderName, "index.js"),
    `export { default } from './${fileName}';\n`
  );
  await fs.writeFile(
    path.join(folderName, fileName + ".jsx"),
    `export default function ${fileName}() {\n\treturn <h1>This is ${fileName}!</h1>;\n}`
  );
  await fs.writeFile(path.join(folderName, fileName + ".styled.jsx"), "");
};

const createFolder = async (componentType, componentName) => {
  const componentFolderPath = path.join(
    __dirname,
    "src",
    componentType,
    componentName
  );
  await fs.mkdir(componentFolderPath, { recursive: true });
  return componentFolderPath;
};

const create = async (componentType, componentsList) => {
  if (!componentsList.length) {
    console.log("You should pass component(s) name");
    return;
  }

  const correctedNames = normalizeNames(componentsList);

  return await Promise.all(
    correctedNames.map(async (componentName) => {
      const folderPath = await createFolder(componentType, componentName);
      await createFiles(folderPath, componentName);
      console.log(`${componentName} created successfully!`);
    })
  );
};

const createStructure = async (action, components) => {
  try {
    switch (action) {
      case "--component":
      case "-c":
        return await create(COMPONENTS_TYPE.components, components);
      case "--page":
      case "-p":
        return await create(COMPONENTS_TYPE.pages, components);
      default:
        return console.log(
          "Set correct action flag: --component (-c) or --page (-p)!"
        );
    }
  } catch (error) {
    console.log(error);
  }
};

const [action, ...files] = process.argv.slice(2);

createStructure(action, files);
