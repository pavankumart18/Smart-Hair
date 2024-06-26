# Smart Hair Recommendation
----------------

## Business Understanding
The $20B hair care industry has the opportunity to evolve and differentiate to meet the needs of today’s high-tech, on-the-move women. Hair salons that appeal to these high-earning women must satisfy them by offering a differentiating level of service. With this project, we attempt to address this challenge by developing a hairstyle recommendation system that identifies the user’s face shape and recommends the most flattering hairstyle.

## Data Understanding
There are five main face shapes often cited on websites and in style magazines. These shapes can be used to find the most flattering hair styles.
* Heart
* Long
* Oval 
* Round 
* Square

## Data Preparation
In order to develop a set of images labeled with the correct face shape, we turned to the experts in the fashion and style industry. We reviewed 22 websites and 234 celebrities. Of these, 33 celebrities had a unanimous classification from 3 or more sites (65 from 2 or more). 49 other celebrities had one or two conflicting classifications but had strong consensus towards a face shape with which we could use to classify. As a result, 74 celebrities were utilized in the analysis. There were ~160 celebrities we did not include as they either had too few citations or several conflicts. Because the topic is already subjective, we wanted to ensure we had a level of rigor to labeling our dataset to improve the outcomes. More labeled data would be ideal and would be an area of future enhancement.
* Review websites (https://www.allure.com/, https://www.marieclaire.com/, https://www.instyle.com/ etc)
* Identify celebrities

Of the five face shapes, square faced celebrities were the most agreed upon, with 74% of those celebrities having a unanimous consensus on their shape. Round was second highest at 70%.

Because the classification of face shape is subjective, this will impact the potential accuracy of the model, however, this model attempts to develop an approach to resolving conflict over face shape and providing more stringent guidelines on the definitions.

Square faces have the most consensus which allowed for us to use the most celebrities with square faces.

In order to collect the image dataset, a script was run to download 100 images from Google Images for each celebrity. The images were manually reviewed to ensure they will work for this project (we quickly confirmed that it was an image of celebrity's face and generally face-forward). The appropriate images were saved out to folders with the name of the classified shape. Our dataset consisted of ~1500 images for 74 celebrities.

## Modeling
An extraordinary amount of work has been done around computer vision such that a library called face_recognition exists to locate the features of a human face. This library was built using dlib’s state-of-the-art face recognition built with deep learning.

### Feature Extraction
Below is a map of the facial feature map which generates 68 unique points.

<img src="/face_points.jpg" width="600," align="center" style="display: block;margin-left: auto;margin-right: auto;width: 50%;">

Note that the face_recognition package does not provide a top point of the head, so on the basis of a few observations, we determined the half-way point on the face is point 29, so we used double the distance between the chin and point 29 to determine face height. Another available method would be to use the change color (from skin to hair) as the top of the face, however, this would require that the photos not have any bangs and may not work for all skin/hair color combinations.

From these face points, we developed 23 additional features. For the first 16 features, we calculated the angles between the chin point (point 9) and each of the jaw line points (1-8, 10-17). Additionally, we added face width (the distance from point 1 to point 17), face height (described above), the ratio between them, the jaw width (distance between points 7 and 11), the jaw width to face width ratio, the mid-jaw width (distance between points 5 and 13), and the mid-jaw width to jaw width ratio.

Our approach will be to first build a facial classifier that will determine whether the user’s face is long, round, oval, heart- or square-shaped. Based on the classification, the model will recommend appealing hairstyles. This classification and recommendation system will help minimize human bias in hair style selection and increase the likelihood that the consumer will be matched with an ideal hair style and therefore more satisfied with her look. We will utilize several techniques and tools from the course: python, visualization, exploratory data analysis, web scraping, feature engineering, featurization, classification models, supervised clustering, unsupervised clustering, artificial neural networks, and possibly TensorFlow and Keras.  We will utilize web scraping to aggregate the celebrities’ pictures and their classified facial shape. Utilizing dlib’s face recognition package, each celebrity’s facial features will be mapped and used to develop a facial shape classification model. The recommendation system will be based on hair styles that are tagged to each face shape. 

From the website user, we will obtain features such as hair type (straight/curly, etc), length preference, and their highest ranking choice. The highest ranking choice can point to the most relevant hair style cluster.

## Evaluation
We will report best hair styles for their face shape on training, test data and recommendation system. Each time they use the system, the application is able to provide feedback that indicates their top and bottom preferences. We plan to use different MLP confusion matrix with test images for further improve the suggested hair styles options based on face shape.

## Deployment
The model will be deployed as an app that allows the user to upload an image of their face, determine their facial shape classification and select and save a gallery of recommended hair styles.

## Recommender
The recommender python file above contains the code for the recommender which uses as inputs: the face shape classified above, the user's desire for an up-do or not and their hair length.

It returns 6 images of hair
