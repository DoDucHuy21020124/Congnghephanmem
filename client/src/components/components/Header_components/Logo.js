import React from "react";
import "./Logo.css";

const Logo = () => {
    return (
        // <svg viewBox="0 0 700 700" class="_siteLogo__image_4hszn _siteLogo__image_y069l"><path d="m0 0h700v700h-700z" fill="#000"></path><path d="m60.379 568.75h262.5v43.75h-262.5z" fill="#fff"></path><path d="m57.428 184.315 20.372-19.232c5.542 6.682 10.758 10.594 17.929 10.594 7.823 0 12.877-5.378 12.877-15.972v-72.205h31.457v72.367c0 14.343-3.586 24.448-11.246 32.109-7.5 7.5-18.254 11.572-31.294 11.572-19.885 0-31.946-8.312-40.095-19.233z" fill="#fff"></path><path d="m147.394 87.5h91.762v26.73h-60.468v17.44h54.763v24.937h-54.763v18.092h61.283v26.893h-92.577z" fill="#fff"></path><path d="m280.491 115.208h-34.064v-27.708h99.911v27.708h-34.227v86.384h-31.62z" fill="#fff"></path><path d="m139.736 282.7c10.106-4.4 17.6-12.224 17.6-25.426v-.326a25.675 25.675 0 0 0 -7.336-18.584c-6.682-6.52-16.788-10.106-31.131-10.106h-58.507v114.092h58.838c27.218 0 43.191-11.9 43.191-31.457v-.326c.001-15.484-8.8-23.307-22.655-27.867zm-48.57-29.011h20.7c9.29 0 14.343 3.422 14.343 9.779v.326c0 6.682-5.542 9.942-15.158 9.942h-19.885v-20.051zm39.607 52.808c0 6.682-5.379 10.431-15.158 10.431h-24.449v-21.028h24.123c10.594 0 15.484 4.075 15.484 10.269v.326z" fill="#fff"></path><path d="m335.8 227.444h-30.475l-42.63 101.193-17.833-26.056c14.18-6.031 23.469-17.6 23.469-35.205v-.326c0-11.246-3.422-19.885-10.1-26.567-7.661-7.661-19.722-12.224-37.162-12.224h-53.953v114.091h31.619v-34.55h14.017l22.981 34.553h54.267l8.15-20.536h44.169l8.149 20.536h33.9zm-99.093 42.05c0 8.312-6.357 13.529-16.951 13.529h-21.02v-27.546h20.864c10.432 0 17.114 4.564 17.114 13.692v.325zm70.737 27.706 12.877-32.271 12.712 32.271z" fill="#fff"></path><path d="m388.119 228.258h31.619v114.092h-31.619z" fill="#fff"></path><path d="m427.56 228.258h29.501l46.94 60.306v-60.306h31.294v114.092h-27.545l-48.896-62.587v62.587h-31.294z" fill="#fff"></path><path d="m537.277 325.4 17.6-21.025c11.409 8.964 23.8 13.691 37 13.691 8.638 0 13.2-2.934 13.2-7.824v-.325c0-4.89-3.749-7.335-19.4-11.084-24.286-5.541-43.03-12.387-43.03-35.694v-.326c0-21.188 16.788-36.509 44.17-36.509 19.4 0 34.553 5.216 46.94 15.158l-15.801 22.328c-10.431-7.5-21.84-11.246-31.946-11.246-7.66 0-11.409 3.1-11.409 7.334v.322c0 5.216 3.912 7.5 19.885 11.083 26.078 5.7 42.377 14.18 42.377 35.531v.326c0 23.307-18.418 37.161-46.126 37.161-20.211.005-39.28-6.351-53.46-18.901z" fill="#fff"></path></svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 72 72"
            xmlSpace="preserve"
        >
        <image
            width="72"
            height="72"
            x="0"
            y="0"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAIAAADajyQQAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAA7DAAAOwwHHb6hkAAANYklEQVRo3u2aWY+k11nHf2d5t1p7ne7Z4oWxExmTsRMcB4ws II5lLnASySAigcQFN3wUPgIS3CBAgFhCRLCIbJBBaEjMeIuXAS8jL7P2Vl1dVe9yNi6qq7u6u6q7 x54QX/Rf3VLVW3XOef7P85zzLKfgBCc4wQlOcIITnOAEJzjBCT7XED+rVSUkUIMUEtCgAAhgwEAJ OZRgwN35EvoO6IfjfFUKIUI4QpIhqzm4Hx6Fh6LoXJq0o1gi+s7eKqurRf4TuAK3oQNeiBC2lxdj r0eTAX6iyHeTmMLrMWvo0bI5dMEA0IAleAK+ubR8wbuFIm9UJnMWMEL2o2gzSW9l6U/K6l/XVt+B VdiCaq8II4bHJ3YEDQkI/LSvJNCCRfgFuAjnsyzScr00l6vqJVgBBefhD5L4yUZztizrxiTO6hCU J4SAFFYKI2Sh9UCrtSx7aaPzj8ZcgTXwx1Kv5LiueDxoqME8PAhPz84/liWLedGqCuHCIE2/tHjK djb+s9+vw2/War+epPdsdhIXVNirbB+0J8U1jQmC2bLMGs0FyR+vrQfYgnK/K06GunP5wzStNeA8 PA1/uLj0uClP9/uzRVG3NnWuZp0TcivLbvf7j8G35+fP9ftNY5UIh5hAgApkzrSj6FQtu5YXmzCY aiUxEixAuDsWU5DAInwTnls6/UC3s5CXYuT3w+OkaaqGZA5+Tcrz/V7DGBX8kY6lvW9VHvqPNZsr kbphXBc8wh41Uh4xsTjW+ZLAPHwNfvvUqQc3O62qEmO7OYTgIQiMMTV4sNGcK8rYuxHtKSsLEQRB AKTOnettPTkzdx80QG0/HpfQ7zs/jiIWjt6tAmpwL3z79Onzg958mSfODSUbkxLAGNOAZnA147T3 w+fj+yUIrJRWyiAYP99j51uVWSzLrzcac5AcreodYlMtI3e+I/bqdvh2GGpb8A14uCiblREjQce3 uAiIgLFeba/mR9/Zs5gTsuN9riIjZRCIIEWQIYQAIpA5+2izdQaScW1PUb08/OM9fENQowDVglYI c7AE98CX4em52eVBP3U7DjZBT6mSFTghKyXDJD1WUn0A3TiyQu0TA6hZd48xX4Y66OlbZLi0Ho2U QDgQ5naejCdBdahBAhHMwkX4jZnZe4uybk3kd0wRhqKLMDw8hArMZpkpig1jZ3WENbHzQ1fcJhlk IdVbmCRNm84Ka8ALIXasmlp7tt97qla7NBisQQ5ukjmGnqKH/xm+AREEyMFAAAUaNMQQQQpzcAaW omghThaSpKbUshBnq2qxLJtlEXvPJAxdKXLunqQxB1fyQas9szzwsfM7Qhspcx2txfF7VXFB62pk j3F/jl1ol9VDreYzxuTG3ITeSNSD0EACp+DZs+cuePf2jRuvQRc8xFCH03ABHtD6vnpzTsvYB+2t 9qiqFIHYu8TZxHl9MKnZ2Wwg8Jmz5waDR+BlWKrVWlVZN2YkPblW1+qNV9bXNsAJghiO2rcvfOTl fJ4/12rqtfW/hY/Bg51GTEEK82X+FRU/sbD4tncfDXIP7SRaTmunpJgty3ZZzQx6qXUSL/aqaJ8E wxROCOG3nXH708S5uSL/arP55tbWf9+4vjg/P9DKCeklTsitJH51c+tlmIOm9VGYuAcR+Jqp7u3x nbk51c+/X+Y3oAPlGL1tAYAmnIbfaTS+G8XLg/5AKyvlUOXae+1D7G3svfZBhT2shlPs7KXDEQRO yE6cvKvUP/d7A0gFLoq2rN/wbg0GsAS/C4/Xa7Nlmdp9JcIo2ZWiEqKn9EZWe1PKP9tYfwNuwmBv qqWGVkvgAnxd6dODftOYdlXNGNOqqoYxNWsT57UPIgQx8bgTI5rIQ6KeABmCEkRKn202NvL8XfjY +VshdEDA/fD07MxjSbyQ57ELcv9Uo9w8oEJIXWhWZVvKc4uLG1tb61BCGAvSGnCQw1plfDaMWp69 u3bPxNvPd4uFka12I4YQKoTtVUb23J5WOztf5jVrztZr39K6U5m+qaIoaSRJRshMNVvZxAXJwXPI 7xXG6yBny/yRjm+cOuVu374Eq2MOuU2sgNuESolw3BLtUK+bnn0rj/IutY4SJ6RRwgmpTCnLMvJB TOBzsLLc5VazZLYIgu8un9m8ef0yDEbaVTuqbsMztfp8lcvxTGwsaw4CxA7tIMTkKCyE2GO9bU1N kExKZBAqeOXRgYmsmBLrx+gFCc0QalpdNqYzWkkzajNswe2qvH8UOo80iycYKQult+KolHqoA+19 4lxqtw8bGfxhQvkgcUdlqxxZfWXOL+X9i+3ZLwwG1yEHO16PteFBY76Q1TLrot1Qe1D32zBK5lp9 oNX3+/m/lOWPy+oduJUktlEXSisfouD1MSrCT40xDwoyiF4cvW/dVe+HvaBdYg2YhwdmZlpVmbmj +0JOCivlu0X1I/gQVmHVuRtFcbXX7xR5mqSJjiRBgpxO7zNtabGrbknYiuP3tb5SVX2oxlsDObwG v6rUWa0odx6Pt0p2Xwek8mTWfS3SX0rTzSAGxniBtfaatS/A5X7vt2q1h7JsKc/1pFQrHLfWw4MQ E+Lk8MmuarxrRPFOcqwYK0ACNKryoazWMpVAyN1RuyX3zrQCdPBJ8I3Kzlm7APOIeaXTdtvOLbyy 1b1mzLmstuB9zU5Ieg6h5KUySvWiaCNN1rJsNY4GWkUh6EnpyHZyI8RWEl+R+rUi34Ry3BUDVNB3 7qv1bNYTe6dDmFbPjLI5BAgRVBAqhCj4yPkgA1n2Qbf7MbiiuJil7aq6IxcrhdiMk2u12guD/G/y /HtV9a6xDydp03o5PQXoJOnrPrxalVtQjruihR7chH9aW59bPHVfH1UU+3KoiRAB8Gqkgcy6ujEL 8AkIofyRRfoYnJBWim6cfKj1D9fXP4RZaOkotmboVmFKDgk4wXpV5aO28d5mjhCbIbwIjc7G7zVb mTGJQ4+1x46z173ACSFhCb4yP58MescnZqXYjJMPtf7Lra6C3281l4QAUhfN5MXB/HtXMIFR8uMi 3+7Jir3EQgg5XIMfGHO6232q1Vwe5A1TRm47eh7OaqhMI1VXqg34Rfi5EI5zwO6g0Ppmlv5wfR34 xtLyvVubS3k5iY8cz7CckFbLfhR9BMXIYmrf2RTAQQXveW98ON9sZtaqENQxIpIX0gq5ltVe6HRu ef9cs3VPUdSNOWTsMBYxikgbafIfxrxh7XNp9pCzs2UZT94Lex5VWnaj5FVrnjfm9oixPjjCjprs f18WoSyeXVg8XeYzRZk5o/1U+TxyoNVaWr9SVe9Y86iUy4F2WUqOTmLGdf9e3luEe+NosbcVh3Dk DgdKpW/Ws5dX13pj9zJy4rE3zPevw1/DH62u/DiOrzfquYqm2gpplFjJsn/P4r/KB8vwK3PzdWsO 2RVDDLtXwz9ABW/ggUY98fYYrIa1iOwrfUVHlyAfO/0nd4J37JZDAVtr68/G0S+320t5UbMmczZy QQUfBEbKUqp+FK2n6eV88BfdroPvpMmZIk9tdRx9H9AR9awmB73jjLVSlEquZemLN29+AvmO/GG3 xT3hMmaYHK/B63CtMpdWV59ZWnrY++VBf7YspZUech2tZNnVLPvBysola/vwCDxQb8xtdhI3vegc nd37WQkCbJa5n5LR7y1hfKmilSx7vawuwcrYPdNUi41zK4ZGgy68f+vWL8Hj9ez+mbks+CBY9eH1 zc2XOp03oA81ONtqZ85lzg3vG8QkmaYl7FZoB291e0/MzTdjU7NuXzq2M3BYy62nydtp8ne3V1b3 XlaMW+ywLS6EMCEM2xLX4fl+nvXzDIb3OgX0oD9qPAqtvPcECXtqln1kDobEgLBS9uEd+FFRyHrz bH+rVfmJ3mSU6KTp+1ntT2/fvgzdsbuWIY57jTTcdQV0YR1W4AbcgFXYgD6Y4a0PqDz/+fZMQhAE BTuZ135l7X3rhKyUvlZrPJ/3r8I1Y1KtGvWmE9JJ6SVBCCelVTJXupskt2q1d6Lkz1dX/gtuHegu CiH2ETusG3OQqjhwxTjMy671e+35ubZSibUqoEI4vAoOgkLJ9TR9L0v/odf7BNbhrapaGeRyYY44 8UIGIYxU/UivZtnVVuvFPP+Tzc6rsNPGmdj6GScGx448E+90a6Nb828J+eT8wmxVNI1JrdXeRQF8 EEI4iRfCCGmULpUold6I9VUbvtfZ+De4DgHqsAhn4CJ8UYpTcZxFumftR3n5CvwvfAKdoX5Hncw9 1yB3SmbH1lMOAKnwCdShDV+Ep9ozj9Sy5aJsl0XNmth7jzRKDrTqxmknTm4o8Wa3+1qv9z+wDhtQ AKM2bgIZJKOY5cd+KZHDlKpBfnpi07E923C/zcAZeBAuwoUsXUzSVEoXRM9WK2X5SVW9B+/DLdiA LmP17WfAsPknJrnTeKGxm/tuh4gprw/6pYAY0pHKI9jJXNyo5z5UfwkV2GFCdAc/vTjIaXfsT5HY p1X4XSL2mQU5Qqrpirtbzj9Zhjsob+/iwv+Pv+Das5q8S4R/Blr7XKz9U8WElEpsnyg7typi+l6e /Okh/fpj4PAVx+c/YpYTnOAEJzjBCU7wecP/AdSUzAFBVDvXAAAAJXRFWHRkYXRlOmNyZWF0ZQAy MDIzLTA0LTEwVDE4OjMwOjM3KzAyOjAw5OWo7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNC0x MFQxODozMDozNyswMjowMJW4EFMAAAAASUVORK5CYII="
        ></image>
    </svg>
    );
}

export default Logo;