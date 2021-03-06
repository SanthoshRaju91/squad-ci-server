import shell from 'shelljs';

/**
* Function to process the application build
* @method startBuild
* @param BUILD_PATH
*/
function startBuild(BUILD_PATH, payload, BRANCH) {
  //change to the repo directory
  console.log(`PATH: ${BUILD_PATH}`);
  console.log(`BRANCH: ${BRANCH}`);

  shell.cd(BUILD_PATH);
  console.log('In directory');
  shell.pwd();
  shell.exec(`git pull origin ${BRANCH}`);
  shell.cd('server');
  shell.exec('npm install');
  shell.exec('npm run seed');
  shell.exec('sudo systemctl restart squad.service');
  console.log('Build completed');
}

export default startBuild;
