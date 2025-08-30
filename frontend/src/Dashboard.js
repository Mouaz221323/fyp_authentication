export default function Dashboard() {
    const token = localStorage.getItem('token');
    return (
      <div>
        <h1>Dashboard</h1>
        <p>JWT Token: {token}</p>
      </div>
    );
  }
  