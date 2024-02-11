const fs = require("fs");
const path = require("path");

// Function to write TSX file
function makePage(srcPath, appFolder) {
  const writePath = "../../" + appFolder + "/page.tsx";
  const writeStream = fs.createWriteStream(writePath);
  // Clear the contents of the existing file if it exists
  fs.writeFileSync(writePath, "");
  const folderPath = srcPath.replace("src", "../../");
  const files = fs.readdirSync(folderPath);
  // Extract file names without extensions
  const fileNames = files.map((file) => path.parse(file).name);

  const importPath = srcPath.replace("src", "@");
  fileNames.forEach((fileName) => {
    writeStream.write(`import ${fileName} from "${importPath}/${fileName}";\n`);
  });

  writeStream.write(`import {readFileContents} from "@/lib/files"\n`);
  writeStream.write(
    `import CodePreview  from "@/components/cards/CodePreview"\n\n`
  );

  writeStream.write(`export default function Page() {\n`);
  writeStream.write(`    return (\n`);
  writeStream.write(`        <>\n`);

  fileNames.forEach((fileName) => {
    writeStream.write(
      `            <CodePreview title="${fileName}" code={${fileName}txt}>\n`
    );
    writeStream.write(`                <${fileName} />\n`);
    writeStream.write(`            </CodePreview>\n`);
  });

  // Write the end of the Page component
  writeStream.write(`        </>\n`);
  writeStream.write(`    );\n`);
  writeStream.write(`}\n`);

  fileNames.forEach((fileName) => {
    writeStream.write(
      `const ${fileName}txt = readFileContents("${srcPath}/${fileName}.tsx");\n`
    );
  });

  // Close the write stream
  writeStream.end();
}

// const folderPath = "src/components/Page/Events/Keyboard"; //relative to app
// const appFolder = "app/html/events/keyboard"; //reltive to this file
// makePage(folderPath, appFolder);
