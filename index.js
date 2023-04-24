const fs = require("fs/promises");
const path = require("path");

const files = process.argv.slice(2);

const createComponent = async (componentsList) => {
  try {
    if (!componentsList.length) {
      console.log("You should pass component(s) name");
      return;
    }

    await Promise.all(
      componentsList.map(async (componentName) => {
        const componentFolderPath = path.join(
          __dirname,
          "src",
          "comonents",
          componentName
        );
        await fs.mkdir(componentFolderPath, { recursive: true });
        await fs.writeFile(
          path.join(componentFolderPath, "index.js"),
          `export {default} from './${componentName}';\n`
        );
        await fs.writeFile(
          path.join(componentFolderPath, componentName + ".jsx"),
          `export default function ${componentName}() {\nreturn <h1>This is ${componentName}!</h1>;\n}`
        );
        await fs.writeFile(
          path.join(componentFolderPath, componentName + ".styled.jsx"),
          ""
        );
        console.log(`${componentName} created successfully!`);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

createComponent(files);
