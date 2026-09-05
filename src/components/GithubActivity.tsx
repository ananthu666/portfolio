"use client";

import { useEffect, useState } from "react";
import { socials } from "@/data/socials";

type GhUser = {
  public_repos: number;
  followers: number;
  avatar_url: string;
};

type GhRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

export default function GithubActivity() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${socials.githubUsername}`),
          fetch(`https://api.github.com/users/${socials.githubUsername}/repos?sort=pushed&per_page=3`),
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error("GitHub API request failed");
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(repoData);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) {
    return (
      <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">GitHub</p>
        <p className="mt-2 text-sm text-ink-300">
          Live activity isn&apos;t available right now —{" "}
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-signal-ai hover:underline">
            view the profile directly →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
          GitHub — live
        </p>
        {user && (
          <p className="font-mono text-[11px] text-ink-400">
            {user.public_repos} repos · {user.followers} followers
          </p>
        )}
      </div>

      <div className="mt-4 space-y-3">
        {!repos &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-12 animate-pulse rounded-lg bg-ink-800" />
          ))}
        {repos?.map((r) => (
          <a
            key={r.name}
            href={r.html_url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="block rounded-lg border border-ink-700 px-4 py-3 transition-colors hover:border-signal-ai"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-ink-100">{r.name}</span>
              {r.language && <span className="font-mono text-[10px] text-ink-500">{r.language}</span>}
            </div>
            {r.description && <p className="mt-1 truncate text-xs text-ink-400">{r.description}</p>}
          </a>
        ))}
      </div>
    </div>
  );
}
