import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchRepoDetails = async (owner, repo) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!res.ok) {
    throw new Error('Repository not found or error in fetching data');
  }
  return res.json();
};

const GitRepo = () => {
  const [ownerName, setOwnerName] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleOwnerChange = (event) => setOwnerName(event.target.value);
  const handleRepoChange = (event) => setRepoName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['repoDetails', ownerName, repoName],
    queryFn: () => fetchRepoDetails(ownerName, repoName),
    enabled: !!ownerName && !!repoName, 
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">GitHub Repo Information</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Owner"
            value={ownerName}
            onChange={handleOwnerChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Repo Name"
            value={repoName}
            onChange={handleRepoChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Repo Info
        </button>
      </form>

      
      {isLoading && <div className="text-center mt-4 text-lg text-gray-600">Loading...</div>}
      {error && <div className="text-center mt-4 text-lg text-red-500">{error.message}</div>}

      
      {data && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Repository Information</h2>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Description:</strong> {data.description}</p>
          <p><strong>Stars:</strong> {data.stargazers_count}</p>
          <p><strong>Forks:</strong> {data.forks_count}</p>
          <p><strong>Open Issues:</strong> {data.open_issues_count}</p>
          <p><strong>Language:</strong> {data.language}</p>
          <p>
            <strong>URL:</strong>{' '}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GitRepo;
