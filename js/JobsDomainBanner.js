
function loadTenMsAdd(job_category_id, context_type, banner_placement, page_name, location_id, job_id) 
{

	var apiUrl = "https://jobs.bdjobs.com/JobsDomainBanner.asp";

	var url_data = "";
	url_data = url_data  + "context_identification_id="+job_category_id;
	url_data = url_data  + "&context_identification_type="+context_type;
	url_data = url_data  + "&placement="+banner_placement;
	url_data = url_data  + "&page_name="+page_name;
	url_data = url_data  + "&location_id="+location_id;
	url_data = url_data  + "&job_id="+job_id;


	var PageName = page_name;

	// Make the AJAX request
	$.ajax({
		url: apiUrl,
		type: "GET",
		dataType: "json",
		data: url_data,

		success: function(response) {

			if (PageName === "jobsearch"){

				if (response.status === 200){

					var bannerData = response.bannerAdData;

					$("#customAdSlider").html(bannerData);
					$("#customTrainingSlider").html(bannerData);

					var slideNo = 2;

				}
			}
			else if (PageName === "jobdetails"){

				if (response.status === 200){

					var bannerData = response.bannerAdData;

					$("#customDAdSlider").html(bannerData);

					var slideNo = 1;

				}
			}

			
			$('.courseslider').slick({
				slidesToShow: slideNo,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				responsive: [
					{
						breakpoint: 994,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			});

			console.log("Success:", response);

		},
		error: function(xhr, status, error) {

			// console.log("Error:", error);
		}
	});
} 