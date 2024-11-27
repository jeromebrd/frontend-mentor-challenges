import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import LayoutChall from '../../../components/LayoutChall';
import ThanksComponent from './components/ThanksComponent';
import { useState } from 'react';
import RatingComponent from './components/RatingComponent';

/**
 * InteractiveRating Component
 *
 * A functional React component for an interactive rating system, where users
 * can select a rating from 1 to 5 and submit their feedback. After submission,
 * a thank-you message is displayed along with the selected rating.
 *
 * Features:
 * - Users can select a rating from a predefined range (1-5).
 * - The component validates that a rating is selected before submission.
 * - After submission, the interface switches to a thank-you message.
 * - Utilizes custom hooks (`useDocumentTitle`) for setting the document title.
 *
 * Props:
 * None.
 *
 * State:
 * - `selectedRating` (number): Stores the currently selected rating (default: 0).
 * - `isSubmitted` (boolean): Tracks whether the rating has been submitted (default: false).
 *
 * Dependencies:
 * - `LayoutChall`: A wrapper component for styling and layout.
 * - `RatingComponent`: Handles the rating selection and submission form.
 * - `ThanksComponent`: Displays the thank-you message after submission.
 *
 * Functions:
 * - `handleSubmit(e)`: Handles the form submission. Ensures a rating is selected
 *   before setting the submission state to true. Logs a message if no rating is selected.
 *
 * Styling:
 * - Uses TailwindCSS for responsive and visually appealing styling.
 * - Includes a radial gradient background and hover effects.
 *
 * Returns:
 * - The rendered component contains a rating form if `isSubmitted` is false,
 *   or a thank-you message otherwise.
 *
 * Example Usage:
 * ```
 * <InteractiveRating />
 * ```
 */
const InteractiveRating = () => {
  useDocumentTitle('Frontend mentor | Interactive Rating');
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRating > 0) {
      setIsSubmitted(true);
    } else {
      console.log('No rating selected');
    }
  };
  return (
    <>
      <LayoutChall className={'bg-[#121417] text-[#959eac] font-overpass'}>
        <div
          className=" min-w-[350px] w-[90%] min-h-[400px] flex flex-col justify-between bg-gradient-to-t from-[#252d37] to-[#959eac] p-8 rounded-3xl md:w-[400px]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% -30%,	rgb(149, 158, 172,0.35), #252d37,	rgb(18, 20, 23, 0.5))',
          }}
        >
          {!isSubmitted ? (
            <RatingComponent
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ThanksComponent rating={selectedRating} />
          )}
        </div>
      </LayoutChall>
    </>
  );
};

export default InteractiveRating;
