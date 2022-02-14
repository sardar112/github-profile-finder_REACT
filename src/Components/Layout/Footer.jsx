function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <p>
          Copyright &copy; {year} All rights reserved.Made by M Saqib Raheem
        </p>
      </div>
    </footer>
  );
}

export default Footer;
