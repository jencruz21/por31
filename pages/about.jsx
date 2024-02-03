const AboutPage = () => {
  return (
    <>
      <h3>Hi I'm Alex</h3>
      <br></br>
      <p>
      
      
Over the past nearly six years, I have gained expertise in cybersecurity, data analysis, 
<br></br>programming languages (Python, C++, C#, Java, Ruby), malware development, game development, cloud engineering (AWS, GCP), <br></br>network engineering (reverse proxy engineering, WAN Accelerators, DNS, DHCP, Cisco CompTIA), and DevOps, among other developments.<br></br>
<br></br>
In addition to my technical skills,I have also served as an Executive Officer for six years, overseeing teams, marketing strategies, employees, and projects.
<br></br><br></br>
Thank you for considering my application. I am excited about the prospect of contributing to your company. and would welcome the opportunity to discuss in further detail how my skills can benefit your organization. Looking forward to the possibility of speaking with you soon.
      </p>
    </>
    
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
