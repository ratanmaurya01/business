"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function AdminPage() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("stock");
    const [content, setContent] = useState("");

    const handleGenerate = () => {
        const mdx = `---
title: "${title}"
slug: "${slug}"
category: "${category}"
description: "${description}"
date: "${new Date().toISOString().split("T")[0]}"
---

${content}`;
        navigator.clipboard.writeText(mdx);
        alert("✅ MDX copied to clipboard!");
    };

    return (
        <div className="max-w-3xl mx-auto py-10 space-y-6">
            <h1 className="text-3xl font-bold">📝 Write a New Blog</h1>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
            <Input placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <select className="border rounded p-2 w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="stock">Stock</option>
                <option value="mutual-fund">Mutual Fund</option>
                <option value="ipo">IPO</option>
                <option value="careers">Careers</option>
                <option value="finance">Finance</option>
            </select>
            <MDEditor value={content} onChange={setContent} />
            <Button onClick={handleGenerate}>📄 Generate & Copy Blog .MDX</Button>
        </div>
    );
}
