export async function getRepositories() {
  const response = await fetch("https://api.github.com/users/NikhilSwarajKZ/repos?sort=stars&per_page=6", {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch repositories")
  }

  return response.json()
}

