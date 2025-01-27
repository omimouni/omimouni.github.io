---
title: Hello World - Markdown Test
slug: hello-world
date: 2024-03-20
---

<h1>Markdown Syntax Guide</h1>

<p>Welcome! This post demonstrates all the Markdown features available.</p>

<h2>Text Formatting</h2>

<p><strong>Bold text</strong> and <em>italic text</em> are basic formatting options.
You can also do <strong><em>bold and italic</em></strong> together.
<del>Strikethrough</del> is also possible.</p>

<h2>Lists</h2>

<h3>Unordered List</h3>
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Nested item 2.1</li>
      <li>Nested item 2.2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>

<h3>Ordered List</h3>
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item
    <ol>
      <li>Nested item</li>
      <li>Another nested item</li>
    </ol>
  </li>
</ol>

<h2>Code Blocks</h2>

<p>Inline code: <code>const greeting = "Hello World!";</code></p>

<pre><code class="language-javascript">
function sayHello() {
  console.log("Hello, World!");
}
</code></pre>

<h2>Blockquotes</h2>

<blockquote>
  <p>This is a blockquote
  It can span multiple lines</p>
  <blockquote>
    <p>And can be nested</p>
  </blockquote>
</blockquote>

<h2>Links and Images</h2>

<p><a href="https://github.com/omimouni">Visit my GitHub</a></p>

<img src="https://picsum.photos/200/300" alt="Alt text">

<h2>Tables</h2>

<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
    <tr>
      <td>Cell 3</td>
      <td>Cell 4</td>
    </tr>
  </tbody>
</table>

<h2>Task Lists</h2>

<ul>
  <li><input type="checkbox" checked> Write the blog post</li>
  <li><input type="checkbox"> Add more examples</li>
  <li><input type="checkbox"> Review and publish</li>
</ul>

<h2>Horizontal Rule</h2>

<hr>

<h2>HTML Support</h2>

<div style="color: blue;">
  This is colored text using HTML
</div>

<details>
  <summary>Click to expand!</summary>
  Hidden content here
</details>

<h2>Math Support</h2>

<p>Inline equation: <code>E = mc²</code></p>

<pre>
\frac{n!}{k!(n-k)!} = \binom{n}{k}
</pre>

<h2>Footnotes</h2>

<p>Here's a sentence with a footnote<sup>1</sup>.</p>

<p><small>1. This is the footnote content.</small></p>

<h2>Emoji Support</h2>

<p>😄 🚀 📚</p>

<hr>

<p>That's all for now! 🎉</p>