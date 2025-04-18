import Link from "next/link";

export const spacings = [240, 387, 594, 992];

export const sections = [
  <>
    <Link
      href="https://instagram.com/usclavalab"
      target={"_blank"}
      className="hover:underline"
    >
      Instagram
    </Link>
    <Link
      href="https://www.facebook.com/usclavalab"
      target={"_blank"}
      className="hover:underline"
    >
      Facebook
    </Link>
    <Link
      href="https://twitter.com/usclavalab"
      target={"_blank"}
      className="hover:underline"
    >
      X
    </Link>
  </>,
  <>
    <p>Made by</p>
    <p>
      <Link
        href="https://iriscleung.com"
        target={"_blank"}
        className="hover:underline"
      >
        Iris Leung
      </Link>
      , Cohort F&apos;21
    </p>
    <p>
      <Link
        href="https://colegaw.in"
        target={"_blank"}
        className="hover:underline"
      >
        Cole Gawin
      </Link>
      , Cohort S&apos;24
    </p>
  </>,
  <>
    <p>Sponsored by</p>
    <p>Lloyd Greif Center</p>
  </>,
  <>
    <p>© 2025</p>
    <p>All rights reserved</p>
  </>,
];
