'use strict';

const { execSync } = require('child_process');
const { GIT_BRANCH, FORCE_LOCAL_PUBLISH } = process.env;

const canPublishLocally = () => FORCE_LOCAL_PUBLISH === 'true';

// by using only the `encoding` option for `execSync`,
// the terminal output will return a string value
const encodingOnly = {
    encoding: 'utf8'
};
// by passing all stdio,
// all output is logged to the terminal
// and not returning an string
const stdOutToTerminal = {
    ...encodingOnly,
    stdio:[0,1,2],
};

const outputBranchError = branch => {
    console.error("must be on the `master` branch to publish!");
    console.error(`currently on ${branch}\n`);
};

const checkCurrentBranch = () => {
    const curBranchRegexp = /^\*/;
    const branches = execSync('git branch', encodingOnly);
    const branchesArr = branches.split('\n').filter(Boolean);
    const filteredBranch = branchesArr.filter(b => curBranchRegexp.test(b));
    if (filteredBranch.length) {
        const branch = filteredBranch.pop().split('*').filter(Boolean).pop().trim();
        return {
            branch,
            isValidBranch: branch === 'master'
        }
    }
    return {
        branch: null,
        isValidBranch: false
    };
};

function sanityChecks() {
    if (canPublishLocally()) {
        console.log('going to publish locally...\n');
        const {branch, isValidBranch} = checkCurrentBranch();
        if (!isValidBranch) {
            outputBranchError(branch);
            process.exit(1);
        }
    } else if (!GIT_BRANCH) {
        console.error('not publishing from jenkins and not publishing locally!\n');
        process.exit(1);
    }
};

module.exports = {
    sanityChecks,
    encodingOnly,
    stdOutToTerminal
};
