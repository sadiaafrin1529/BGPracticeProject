import React from 'react';

const UserTable = () => {
    return (
        <div class="w3-container">
  <h2>Basic Table</h2>
  <p>The w3-table class defines a basic table:</p>

  <table class="w3-table w3-bordered">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
    </tr>
  </table>
</div>
    );
};

export default UserTable;