
function samplePromise(){
  return Promise.resolve("ilham");
}

const name = await samplePromise();
console.info(name);

