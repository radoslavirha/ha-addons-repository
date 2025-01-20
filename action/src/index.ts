import core from '@actions/core';

console.log('TOKEN', core.getInput('TOKEN'));
console.log('ADDON', core.getInput('ADDON'));
console.log('FORCE', core.getInput('FORCE'));