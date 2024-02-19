import Image from 'next/image';

function LoginImage() {
  return (
    <article>
      <Image
        src="/assets/img/login-image.webp"
        width={400}
        height={375}
        alt="pintura de corazón"
        loading="lazy"
      />
    </article>
  );
}

export default LoginImage;
