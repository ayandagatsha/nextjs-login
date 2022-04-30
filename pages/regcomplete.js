import Link from 'next/link';

function RegComplete() {
    // Show Link to Login page if NOT auth
  
    return (
      <section >
        <h1>Welcome on Board! You can now do x,y,z once you login 

        <Link href='/auth'>
        <a>
          <div>Log in</div>
        </a>
      </Link>
        </h1>
        
      </section>
    );
  }
  
  export default RegComplete;
  