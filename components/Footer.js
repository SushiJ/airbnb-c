function Footer() {
  return (
    <div className="grid px-32 text-gray-600 bg-red-100 md:grid-cols-4 gap-y-10 py-14">
      <div>
        <h5 className="space-y-4 text-xs font-semibold text-gray-800">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Investors</p>
        <p>HotelTonight</p>
        <p>Careers</p>
      </div>
      <div>
        <h5 className="space-y-4 text-xs font-semibold text-gray-800">
          COMMUNITY
        </h5>
        <p>Accesibility</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
        <p>Airbnb.org</p>
      </div>
      <div>
        <h5 className="space-y-4 text-xs font-semibold text-gray-800">HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Centre</p>
      </div>
      <div>
        <h5 className="space-y-4 text-xs font-semibold text-gray-800">
          SUPPROT
        </h5>
        <p>Our COVID-19 Response</p>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support</p>
        <p>Trust & Saftey</p>
      </div>
    </div>
  );
}

export default Footer;
