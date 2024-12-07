import fs from "fs";

export function isOrderingCorrect(update: number[]): boolean {
    // iterate through the numbers and check if the rules are violated
    for (let i = 0; i < update.length; i++) {
        let num = update[i];
        let rules = numberToRules.get(num);
        if (rules) {
            for (let rule of rules) {
                // e.g. update (75,47,61,53,29) is in the right order:
                // 75 is correctly first because there are rules that put each other page after it: 75|47, 75|61, 75|53, and 75|29.
                // now check each value in the update array to see if the rule is violated
                if (num === rule.first) {
                    // num must come before the other value in the rule
                    let other = rule.second;
                    for (let j = i + 1; j < update.length; j++) {
                        if (update[j] === other) {
                            if (j < i) {
                                return false
                            }
                            break;
                        }
                    }
                } else {
                    // num must come after the other value in the rule
                    let other = rule.first;
                    for (let j = i + 1; j < update.length; j++) {
                        if (update[j] === other) {
                            if (j > i) {
                                return false
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
    return true
}

type rule = {
    first: number
    second: number
}

const numberToRules = new Map<number, rule[]>();

export function loadRulesForNumbers(filePath: string) {
    numberToRules.clear();
    const rulesFile = fs.readFileSync(filePath, 'utf-8')
    // map each number to its rules
    for (let rule of rulesFile.split('\n')) {
        let [first, second] = rule.split('|').map(Number)
        let rules = numberToRules.get(first) || []
        rules.push({first, second})
        numberToRules.set(first, rules)
    }
    // map it for the second rule
    for (let rule of rulesFile.split('\n')) {
        let [first, second] = rule.split('|').map(Number)
        let rules = numberToRules.get(second) || []
        rules.push({first, second})
        numberToRules.set(second, rules)
    }

}


export function part1() {
    const updatesInput = fs.readFileSync('src/day5/updates_input.txt', 'utf8');
    loadRulesForNumbers('src/day5/rules_input.txt')
    const updateLines = updatesInput.split('\n');
    let sum = 0
    for (let updateLine of updateLines) {
        const updatesStr = updateLine.split(",");

        let updates: number[] = [];
        updatesStr.map((str) => updates.push(Number(str)));

        if (isOrderingCorrect(updates)) {
            // add the middle index
            sum += updates[Math.floor(updates.length / 2)]
        }
        console.log(sum);
    }
}

part1();