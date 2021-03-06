---
layout: post
title: "Progress report 2011"
category: note
---
This progress report should present:
 
* Review of the past reference period (to be written by the student)
* Objectives for the next reference period (to be written by the student)
* Report on the performance of the student (to be written by the supervisor)
 
 
## Review of the past reference period

## Terms of Reference
Catherine.Zimmermann@cern.ch, PH Departmental Secretariat 

## Implemented new Gaudi parsers tool
Implemented C++ library for reading property values from files or strings

* ** Releases in Gaudi v22r3 (2011)**:
  * Based on Boost.Spirit v2.x parser generator
  * Fully rewritten
  * Backward compatible with the previous version

* **New version (Results)**:
  * Contains significantly less (about a factor 5) amount of
  code lines.
  * Is much more flexible with respect to addition of new types.
  * Is more readable and more robust.
  * Requires less resources for compilation both in terms of CPU
  and required memory.
  * Results in sizable reduction in size for GaudiKernel and
  GaudiSvc libraries.
  * Is based on Boost.Spirit v2, that is modern version with
  guaranteed long-term support.

## Implemented Gaudi Profiling Auditors

Implemented  C++ Gaudi Profiling Auditors.

* Measuring of dynamic metrics of code CPU time spent in function.
* Memory MB allocated in function.

Article abstract on this tool was accepted to 
"Computing in High Energy and Nuclear Physics 2012" conference:

**Abstract: Advanced Modular Software Performance Monitoring**.

"The LHCb software is based on the Gaudi framework, on top of which are built several
large and complex software applications. The LHCb experiment is now in the active phase
of collecting and analyzing data and significant performance problems arise in the Gaudi
based software beginning from High Level Trigger (HLT) programs and ending with data
analysis frameworks (DaVinci). It’s not easy to find hot spots in the code - only special
tools can help to understand where CPU or memory usage is not reasonable. There exist
many performance analyzing tools, but the main problem is that they show reports in
terms of class and function names and such information usually is not very useful - the
majority of algorithm developers use the Gaudi framework abstractions and usually do
not know about functions which lie at the lower level. We will show a new approach which
adds to performance reports a higher abstraction level based on knowledge of framework
architecture and run-time object properties. A set of profiling tools (based on sampling
) and  visualizing interfaces has been developed and deployed."

## Objectives for the next reference period

At the first year of my PhD the tool for finding hot spots at LHCb software 
was developed. Objective for the second year is an optimization of  High Level
Trigger algorithms using the information extracted from my Gaudi auditors.

# Example Report

## Terms of Reference

Margaret Anderson, Director of Personnel has requested this report on employee benefits satisfaction. The report was to be submitted to her by 28 June.

## Procedure

A representative selection of 15% of all employees were interviewed in the period between April 1st and April 15th concerning:

* Overall satisfaction with our current benefits package
* Problems encountered when dealing with the personnel department
* Suggestions for the improvement of communication policies
* Problems encountered when dealing with our HMO


## Findings
* Employees were generally satisfied with the current benefits package.
* Some problems were encountered when requesting vacation due to what is perceived as long approval waiting periods.
* Older employees repeatedly had problems with HMO prescription drugs procedures.
* Employees between the ages of 22 and 30 report few problems with HMO.
* Most employees complain about the lack of dental insurance in our benefits package.
* The most common suggestion for improvement was for the ability to process benefits requests online.


## Conclusions

* Older employees, those over 50, are having serious problems with our HMO's ability to provide prescription drugs.
* Our benefits request system needs to be revised as most complaints concerning in-house processing.
* Improvements need to take place in personnel department response time.
* Information technology improvements should be considered as employees become more technologically savvy.


## Recommendations

* Meet with HMO representatives to discuss the serious nature of complaints concerning prescription drug benefits for older employees.
* Give priority to vacation request response time as employees need faster approval in order to be able to plan their vacations.
* Take no special actions for the benefits package of younger employees.
* Discuss the possibility of adding an online benefits requests system to our company Intranet.

# Important Points to Remember
* A report is divided into four areas:
  * Terms of Reference - This section gives background information on the reason for the report. It usually includes the person requesting the report.
  * Procedure - The procedure provides the exact steps taken and methods used for the report.
  * Findings - The findings point out discoveries made during the course of the report investigation.
  * Conclusions - The conclusions provide logical conclusions based on the findings.
  * Recommendations - The recommendations state actions that the writer of the report feels need to be taken based on the findings and conclusions.
* Reports should be concise and factual. Opinions are given in the "conclusions" section. However, these opinions should be based on facts presented in the "findings".
* Use simple tenses (usually the present simple) to express facts.
* Use the imperative form (Discuss the possibility ..., Give priority ..., etc.) in the "recommendations" section as these apply to the company as a whole.



