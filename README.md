# Git & GitHub for AI-Assisted Developers: Companion Files

Starter files, scenario files, solutions, and every command used in the book
*Git & GitHub for AI-Assisted Developers: A Hands-On Guide to Version Control, Branching, Collaboration, and AI Coding Workflows*
by Arnut Ruttanatirakul (SysAdmin Knowledge Press).

The running project is the menu page of a fictional coffee shop, **SysAdmin Knowledge**,
written in plain HTML, CSS, and JavaScript. All data is sample data.

## How to use these files

1. Download this repository (**Code > Download ZIP**) or clone it:
   `git clone https://github.com/arnutkmitl/git-github-ai-companion.git`
2. Copy the folder a lab asks for into your own practice folder (for example `projects/coffee-menu`).
   Work in your copy, never inside this repository.
3. Open `index.html` in a browser. Nothing needs to be installed, except Node.js for the
   automated tests in chapters 11 and 12 (`node --test`).

Your commit IDs will differ from the book's. Compare the app's behavior and the shape of
your history instead.

## Folders by chapter

| Folder | Used in |
|---|---|
| `ch01-compare/before`, `ch01-compare/after` | Lab 1.1: find why the menu disappeared |
| `ch02-start` | Chapter 2: the starting app |
| `ch03-end` | End of chapter 3 |
| `ch04-task` | Lab 4.1: a theme change with an out-of-scope price edit to catch |
| `ch04-gitignore-sample`, `ch04-end` | Lab 4.2 and end of chapter 4 |
| `ch05-mess`, `ch05-broken`, `ch05-end` | Labs 5.3 and 5.4, end of chapter 5 |
| `ch06-end` | End of chapter 6 |
| `ch07-end` | End of chapter 7 |
| `ch08-end` | End of chapter 8 |
| `ch09-ai-output`, `ch09-end` | Lab 9.2 (simulated AI output) and end of chapter 9 |
| `ch10-end` | End of chapter 10 |
| `ch11-starter`, `ch11-end` | Chapter 11: tests and GitHub Actions workflow |
| `ch12-starter`, `ch12-review-fix`, `ch12-end` | Chapter 12: demo cart, review fix, final app |

Some folders contain hidden files (`.gitignore`, `.github/workflows/test.yml`). Turn on
"show hidden files" in your file manager when you copy them.

## Commands by chapter

The `commands` folder lists every command and code snippet from each chapter, grouped by
section, so you can copy them instead of retyping.

| File | Chapter | Snippets |
|---|---|---|
| `commands/ch02.md` | 2. Install Git and VS Code and Open Your First Project | 10 |
| `commands/ch03.md` | 3. Your First Commit: Save Points for Your Project | 11 |
| `commands/ch04.md` | 4. See What Changed: Diff, Log, and .gitignore | 9 |
| `commands/ch05.md` | 5. Undo, Rewind, and Recover Broken Work | 15 |
| `commands/ch06.md` | 6. Branches: Try New Ideas Without Breaking What Works | 18 |
| `commands/ch07.md` | 7. Merge Conflicts Without the Panic | 15 |
| `commands/ch08.md` | 8. Going Online with GitHub: Push, Pull, and Clone | 18 |
| `commands/ch09.md` | 9. Using Git with AI Coding Assistants | 5 |
| `commands/ch10.md` | 10. Pull Requests and Code Review Before You Merge | 15 |
| `commands/ch11.md` | 11. GitHub Pages and Actions: Put Your App Online for Free | 11 |
| `commands/ch12.md` | 12. A Daily Workflow and Your First Steps into Teamwork | 18 |

## Errata and questions

Found an error? Please open an issue in this repository with the chapter, section, and
what you expected. Corrections go into the next update of the book.

## License

The code in this repository is released under the MIT License (see `LICENSE`).
The book text is copyright Arnut Ruttanatirakul and is not covered by this license.
