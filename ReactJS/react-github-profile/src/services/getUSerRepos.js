export default function getUSerRepos(githubUser) {
  console.log(`USerService`);
  return fetch(`https://api.github.com/users/${githubUser}/repos`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));
}
