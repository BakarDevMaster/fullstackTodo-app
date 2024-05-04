"use server"

import { revalidateTag } from "next/cache";


export const Gettodo = async(url:any) => {
    try {
        const fetchtask = await fetch(url, { next: { tags: ["task"] } });
        const res = await fetchtask.json();
        return res;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const Posttodo = async(url:any, data:any) => {
    try {
        const fetchtask = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        revalidateTag("task");
        return "task added";
    } catch (error) {
        console.error('Error:', error);
    }
}

export const Deletetodo = async(url:any, data:any) => {
    try {
        const fetchtask = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        revalidateTag("task");
        return "task deleted";
    } catch (error) {
        console.error('Error:', error);
    }
}

export const Updatetodo = async(url:any, data:any) => {
    try {
        const fetchtask = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        revalidateTag("task");
        return "task updated";
    } catch (error) {
        console.error('Error:', error);
    }
}

