import React from 'react';

const ResearchPage = () => {
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFFFFF' }}>
        Stating the Problem
      </h1>
      <br />
      <p style={{ padding: '0 225px' }}>
        Education is a fundamental human right, yet millions of people worldwide
        still lack access to quality education. In many countries, barriers such as
        poverty, gender inequality, and conflict prevent children and adults from
        pursuing their right to learn. There are many countries in the world that have very
        little access to proper education. Below, we have analyzed many factors that 
        results in a lack of education so Educate can focus on those specific regions.
      </p>

      <br /><br />
      <h2 className="text-4xl font-bold text-center text-white py-4">
        Countries with the Lowest Literacy Rate
      </h2>

      <table style={{ width: '80%', margin: 'auto', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th className='text-black'>Country</th>
            <th className='text-black'>Population</th>
            <th className='text-black'>Literacy Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>South Sudan</td>
            <td>10.75 million</td>
            <td>27.0%</td>
          </tr>
          <tr>
            <td>Afghanistan</td>
            <td>40.10 million</td>
            <td>28.1 %</td>
          </tr>
          <tr>
            <td>Burkina Faso</td>
            <td>20.90 million</td>
            <td>28.7%</td>
          </tr>
          <tr>
            <td>Niger</td>
            <td>21.48 million</td>
            <td>28.7%</td>
          </tr>
          <tr>
            <td>Mali</td>
            <td>21.90 million</td>
            <td>33.4%</td>
          </tr>
          <tr>
            <td>Chad</td>
            <td>15.48 million</td>
            <td>35.4%</td>
          </tr>
          <tr>
            <td>Somalia</td>
            <td>17.07 million</td>
            <td>37.8%</td> 
          </tr>
          <tr>
            <td>Ethiopia</td>
            <td>120.28 million</td>
            <td>39.0%</td>
          </tr>
          <tr>
            <td>Guinea</td>
            <td>12.72 million</td>
            <td>41.0%</td>
          </tr>
          <tr>
            <td>Benin</td>
            <td>13.00 million</td>
            <td>42.4%</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <h1>The table above shows the lowest literacy rates in the world, thus suggesting to fund more education in these countries.</h1>

      <br /><br />

      <h2 className="text-4xl font-bold text-center text-white py-4">
        Countries with the Gross Enrollment Rate (GER)
      </h2>

      <table style={{ width: '80%', margin: 'auto', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th className='text-black'>Country</th>
            <th className='text-black'>GER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>South Sudan</td>
            <td>39.6</td>
          </tr>
          <tr>
            <td>Niger</td>
            <td>47.3</td>
          </tr>
          <tr>
            <td>Central African Republic</td>
            <td>50.5</td>
          </tr>
          <tr>
            <td>Chad</td>
            <td>54.7</td>
          </tr>
          <tr>
            <td>Burkina Faso</td>
            <td>56.5</td>
          </tr>
          <tr>
            <td>Eritrea</td>
            <td>58.5</td>
          </tr>
          <tr>
            <td>Guinea-Bissau</td>
            <td>59.0</td> 
          </tr>
          <tr>
            <td>Angola</td>
            <td>61.7</td>
          </tr>
          <tr>
            <td>Ethiopia</td>
            <td>41.0</td>
          </tr>
          <tr>
            <td>Mali</td>
            <td>65.1</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <h1>The table above shows the countries with the lowest Gross Enrollment Rate (GER), which allows Educate to focus on expanding education to these countries.</h1>
      
      <br />
    </div>
  );
};

export default ResearchPage;
