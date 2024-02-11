function samplePromise(){
  return Promise.resolve("ilham");
}

async function run(){
  const name = await samplePromise();
  console.info(name);
}

run();
