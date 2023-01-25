import React from 'react';

// head.js should only return to the following tags:
//
//     <title>
//         <meta>
//             <link> (only if it has the precedence attribute)
//                 <script> (only if it has the async attribute)

// Nested head.js files do not inherit or merge tags from head.js files higher up in the tree. See more: Sharing tags across multiple routes.

//params The dynamic route parameters object from the root segment down to that head.
//
// Example	URL	params
// app/shop/[slug]/head.js	/shop/1	{ slug: '1' }
// app/shop/[category]/[item]/head.js	/shop/1/2	{ category: '1', item: '2' }
// app/shop/[...slug]/head.js	/shop/1/2	{ slug: ['1', '2']

function Head({params}) {
    return (
        <>
            <title>template</title>
            <meta name="description" content="basic nextjs tailwind supabase template" />
            <link rel="icon" href="/favicon.svg" />
        </>
    );
}

export default Head;