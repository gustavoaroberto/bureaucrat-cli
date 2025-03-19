import figlet from "figlet";
import { Command } from "commander";
import { VERSION } from "./constants";

const program = new Command();

console.log(figlet.textSync("Bureaucrat", { font: "Big" }));

program
  .version(VERSION)
  .description("CLI tool for generating merge requests")
  .option("-c  [value]", "Set the bureaucrat configuration file")
  .parse(process.argv);

const options = program.opts();
console.log(options);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
