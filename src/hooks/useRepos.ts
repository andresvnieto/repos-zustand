import apiGithub from "../api/github"
import { useQuery } from "@tanstack/react-query";
import { Repository } from "./types";
import { useRepoStore } from "../store/useRepoStore";

async function fetchRepositories() {
    const { data } = await apiGithub.get<Repository[]>('/repos')
    return data;
}

export function useFetchRepositories() {
    return useQuery({
        queryKey: ['repositories'], queryFn: fetchRepositories, initialData: [],
    })
}