#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import open from 'open';

// Clear the console
clear();

const generate = text => {
  const theme = {
    colors: [
      '#FF9DA4',
      '#FFC58F',
      '#FFEEAD',
      '#D1F1A9',
      '#99FFFF',
      '#BBDAFF',
      '#EBBBFF',
      '#EBBBFF',
      '#BBDAFF',
      '#99FFFF',
      '#D1F1A9',
      '#FFEEAD',
      '#FFC58F',
      '#FF9DA4',
    ],
    background: '#222222',
    foreground: '#ffffff'
  };

  // let horizontalLayout = 'default';
  // let verticalLayout = 'default';
  let horizontalLayout = 'default';
  let verticalLayout = 'default';
  // let font = 'ANSI Shadow';
  let font = 'Colossal';

  let coloredData = '';
  let colorsIndex = 0;
  let data;

  try {
    data = figlet.textSync(text, {
      font: font,
      horizontalLayout: horizontalLayout,
      verticalLayout: verticalLayout
    });
  } catch (error) {
    return error;
  }
  for (let i = 0; i < data.length; i++) {
    let character = data.charAt(i);
    if (character !== '_') {
      if (
        data.charAt(i - 1) === '_' ||
        data.charAt(i - 1) === ' ' ||
        data.charAt(i - 1) === '.'
      ) {
        colorsIndex++;
        if (colorsIndex >= theme.colors.length) {
          colorsIndex = 0;
        }
      }
      coloredData += chalk
        .hex(theme.colors[colorsIndex])
        .bgHex(theme.background)(data.charAt(i));
    } else {
      coloredData += chalk.hex(theme.foreground).bgHex(theme.background)(
        data.charAt(i)
      );
    }
  }
  return coloredData;
};

let name;
  name = chalk.bold(generate('Pranjal'));

const data = {
  name: name,
  handle: chalk.white('@pranjal-barnwal'),
  slogan: chalk.hex('#ffcf56')('I turn ideas into Products.'),
  title: chalk.hex('#f4a261')('Full Stack | Devops | Competitive-Programming'),
  fact: chalk.hex('#cdcdcd')('I love to watch Anime, and play Guitar!'),
  email: chalk.hex('#cdcdcd')('mail@pranjalkumar.in'),
  github: chalk.hex('#cdcdcd')('https://github.com/pranjal-barnwal'),
  portfolio: chalk.hex('#cdcdcd')('https://pranjalkumar.in'),
  blogs: chalk.hex('#cdcdcd')('https://blogs.pranjalkumar.in'),
  twitter: chalk.hex('#cdcdcd')('https://twitter.com/pranjalBarnwal_'),
  linkedin: chalk.hex('#cdcdcd')('https://linkedin.pranjalkumar.in'),
  behance: chalk.hex('#cdcdcd')('https://www.behance.net/pranjal-barnwal'),
  npx: chalk.hex('#06D6A0')('npx pranjal-kumar'),

  labelFact: chalk.hex('#2bfbaa').bold('    Fun Fact:'),
  labelEmail: chalk.hex('#e76f51').bold('    Email:'),
  labelBlogs: chalk.hex('#99d98c').bold('    Blogs:'),
  labelPortfolio: chalk.hex('#52b788').bold('    Site:'),
  labelTwitter: chalk.hex('#48cae4').bold('    Twitter:'),
  labelGitHub: chalk.hex('#deaaff').bold('    GitHub:'),
  labelBehance: chalk.hex('#f4978e').bold('    Behance:'),
  labelLinkedin: chalk.hex('#55C1FF').bold('    Linkedin:'),
  labelCard: chalk.hex('#76e600').bold('    $')
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.slogan}`,
    `${data.title}`,
    ``,
    ``,
    `${chalk.hex('#76e600').bold("# FUN FACT")}`,
    `    ${data.fact}`,
    ``,
    ``,
    `${chalk.hex('#76e600').bold("# SOCIALS")}`,
    `${data.labelPortfolio}  ${data.portfolio}`,
    `${data.labelBlogs}  ${data.blogs}`,
    `${data.labelEmail}  ${data.email}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    `${data.labelBehance}  ${data.behance}`,
    `${data.labelTwitter}  ${data.twitter}`,
    ``,
    ``,
    `${chalk.hex('#76e600').bold("# NPX COMMAND")}`,
    `${data.labelCard} ${data.npx}`,
    ``,
    ``,
    `${chalk.hex('#76e600').bold("# ABOUT")}`,
    `    ${chalk.hex('#dadada').bold(
      "Hi there! I'm Pranjal an experienced Software Engineer"
      )}`,
    `    ${chalk.hex('#dadada').bold(
      'specializing in building exceptional digital experiences.'
    )}`,
    '',
    `    ${chalk.hex('#dadada').bold(
      'Currently, I’m focused on building infrastructure'
    )}`,
    `    ${chalk.hex('#dadada').bold(
      'engineering softwares at Bentley Systems.'
    )}` 
  ].join('\n'),
  {
    margin: 1,
    padding: 1,
    float: 'center',
    borderStyle: 'bold',
    borderColor: 'green'
  }
);

// Show the boxen
console.log(me);

// Show the tips
const tip = [
  `Tip: ${chalk.green.bold(
    'cmd/ctrl + click'
  )} on the links above to open them in your broswer.`,
  ''
];

if (process.stdout.columns < 95) {
  tip.push(
    ...[
      `Quick TIP: ${chalk.greenBright.bold(
        'Make your terminal wider to get an awesome art.'
      )}`,
      ''
    ]
  );
}

console.log(tip.join('\n'));

// Inquirer prompt
const prompt = inquirer.createPromptModule();

// Prompt questions
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        name: `Direct chat with me? 📩`,
        value: () => {
          open('https://whatsapp.pranjalkumar.in');
          console.log(
            '\nLooking forward to hearing your message and replying to you!\n'
          );
        }
      },
      {
        name: `Visit my site? 🚀`,
        value: () => {
          open('https://pranjalkumar.in');
          console.log('\nThanks for the visit to my site!\n');
        }
      },
      {
        name: 'GoodBye (Exit) 👋',
        value: () => {
          console.log('👋 Catch you later, Have a nice day!\n');
        }
      }
    ]
  }
];

// Handle prompts
prompt(questions).then(answer => answer.action());