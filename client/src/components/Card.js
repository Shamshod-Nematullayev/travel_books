import React from "react";

export default function Card() {
  return (
    <div class="card mb-3">
      <img
        class="card-img-top"
        src="https://i2-prod.ok.co.uk/incoming/article28619562.ece/ALTERNATES/s1200/1_1.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}
